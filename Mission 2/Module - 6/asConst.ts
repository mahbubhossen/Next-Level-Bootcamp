// as const assertion

// enum UserRole {
//     Admin = "Admin",
//     Editor = "Editor",
//     viewer = "Viewer"
// }

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  viewer: "Viewer",
} as const;

const canEdit2 = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  }
  return false;
};

const isEditPermissable2 = canEdit2(UserRoles.Admin);
console.log(isEditPermissable2);
