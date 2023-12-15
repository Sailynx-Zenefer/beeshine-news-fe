import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { reqFromApi } from "../utils/utils";

const voteRef = {
  up: {
    up: {
      voteStrChange: "default",
      voteIntChange: -1,
    },
    dn: {
      voteStrChange: "up",
      voteIntChange: 1,
    },

    default: {
      voteStrChange: "up",
      voteIntChange: 1,
    },
  },
  dn: {
    dn: {
      voteStrChange: "default",
      voteIntChange: 1,
    },
    up: {
      voteStrChange: "dn",
      voteIntChange: -1,
    },

    default: {
      voteStrChange: "dn",
      voteIntChange: -1,
    },
  },
};

const Voter = ({
  votes,
  voteeId,
  setOptimVote,
  voteeType,
  parentId = "Invalid Votee Type",
}) => {
  const { userData, setUserData } = useContext(UserContext);
  const [voteeVal, setVoteeVal] = useState("default");

  const voteeEndpointRef = {
    article: `/api/articles/${voteeId}`,
    comment: `/api/articles/${parentId}/comments/${voteeId}`,
  };

  const voteeTypeEndpoint = voteeEndpointRef[voteeType];

  const toggleVote = (upOrDn) => {
    const voteObj = {
      inc_votes: voteRef[upOrDn][voteeVal].voteIntChange,
    };
    setOptimVote(voteRef[upOrDn][voteeVal].voteIntChange);
    setUserData((currUserData) => {
      const modUserData = { ...currUserData };
      modUserData.votedOn[voteeId] = voteRef[upOrDn][voteeVal].voteStrChange;
      return modUserData;
    })
    return reqFromApi("patch", voteeTypeEndpoint, voteObj).then((res) => {
      setVoteeVal(() => userData.votedOn[voteeId]);
    });
  };

  return (
    <div className="voter">
      <button
        className={voteeVal === "up" ? "up-voted" : "up-vote"}
        onClick={() => toggleVote("up")}
        disabled={voteeType === "comment" ? true : false}
      >
        ◭
      </button>
      <p>{votes}</p>
      <button
        className={voteeVal === "dn" ? "down-voted" : "down-vote"}
        onClick={() => toggleVote("dn")}
        disabled={voteeType === "comment" ? true : false}
      >
        ⧩
      </button>
    </div>
  );
};

export default Voter;
