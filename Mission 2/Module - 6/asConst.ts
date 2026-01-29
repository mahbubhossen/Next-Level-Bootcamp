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

const canEdit2 = (role: (typeof UserRoles)[keyof typeof UserRole]) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  }
  return false;
};

const isEditPermissable2 = canEdit2(UserRole.Admin);
console.log(isEditPermissable2);
