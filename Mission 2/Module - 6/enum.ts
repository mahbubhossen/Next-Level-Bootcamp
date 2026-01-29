// enum     

// type UserRole = "Admin" | "Editor" | "User";

enum UserRole {
    Admin = "Admin",
    Editor = "Editor",
    viewer = "Viewer"
}

const canEdit = (role : UserRole) => {
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }
    return false;
}

const isEditPermissable = canEdit(UserRole.Admin);
console.log(isEditPermissable);


/*
enum is not recommend to use in production because it creates so many code in the js file . so senior developer suggest use as const instead of enum
*/