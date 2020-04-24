// create a policy

const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount,
    },
  };
};

// create a claim

const createPolicy = (name, amountToClaim) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amountToClaim: amountToClaim,
    },
  };
};

// delete a claim
const deletePolicy = (name) => {
  return {
    type: "Delete_POLICY",
    payload: {
      name: name,
    },
  };
};
