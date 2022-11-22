import * as Realm from "realm-web";

export const realmApp = new Realm.App(
  process.env.NEXT_PUBLIC_REALM_APP_ID || ""
);

export async function getValidAccessToken() {
  if (!realmApp.currentUser) {
    await realmApp.logIn(Realm.Credentials.anonymous());
  } else {
    await realmApp.currentUser.refreshAccessToken();
  }
  return realmApp.currentUser?.accessToken;
}
