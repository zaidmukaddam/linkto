export enum UserStatus {
  BASIC = "BASIC",
  VERIFIED = "VERIFIED",
}

export enum PageLinkPreference {
  PATH = "PATH",
  SUBDOMAIN = "SUBDOMAIN",
  CUSTOM = "CUSTOM",
}

export enum PageLinkPosition {
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}

export enum LinkKind {
  LINK = "LINK",
  EMBED = "EMBED",
}

export enum CustomFunction {
  REORDER = "update_links_order",
  CHANGE_PASSWORD = "change_user_password",
  DELETE_ACCOUNT = "delete_user_account",
}

export enum ThemeKind {
  SYSTEM = "SYSTEM",
  CUSTOM = "CUSTOM",
}

export enum ThemeState {
  PUBLISHED = "PUBLISHED",
  PRIVATE = "PRIVATE",
}
