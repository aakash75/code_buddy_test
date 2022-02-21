// level = 2

async function getUsers() {
  let doc = await Promise.all(getUser(), getProfile(), getPosts());
  let userProfile = {};
  userProfile["user"] = doc[0];
  userProfile["Profile"] = doc[1];
  userProfile["p"] = doc[2];

  return userProfile;
}
