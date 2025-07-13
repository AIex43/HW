import { UserProfilePrototype } from "./UserProfilePrototype";

export type Permissions = {
  canEditUsers: boolean;
  canApproveBudget: boolean;
  canAccessInternalTools: boolean;
};

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: "finance" | "engineering" | "marketing",
    public permissions: Permissions
  ) {}

  public clone(): UserProfile {
    const newPerms: Permissions = {
      canEditUsers: this.permissions.canEditUsers,
      canApproveBudget: this.permissions.canApproveBudget,
      canAccessInternalTools: this.permissions.canAccessInternalTools,
    };
    return new UserProfile(this.username, this.department, newPerms);
  }
}
