import React from "react";
import CommentDetails from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails name="Sam" imageUrl={faker.image.avatar} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails name={"Ram"} imageUrl={faker.image.avatar} />
      </ApprovalCard>
    </div>
  );
};

export default App;
