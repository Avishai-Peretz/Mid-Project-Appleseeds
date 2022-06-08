import React from 'react'

export default function setRole() {
    // By specifying no write privileges for the ACL, we can ensure the role cannot be altered.
    const roleACL = new Moralis.ACL();
    roleACL.setPublicReadAccess(true);
    const role = new Moralis.Role("Administrator", roleACL);
    role.save();
    role.getUsers().add(usersToAddToRole);
    role.getRoles().add(rolesToAddToRole);
    role.save();
}
