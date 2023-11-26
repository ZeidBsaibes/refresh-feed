const isUserOwner = (objectOwnerId, userId) => {
  if (userId === objectOwnerId) {
    return true;
  }
  return false;
};

export default isUserOwner;
