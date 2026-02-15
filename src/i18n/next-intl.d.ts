import type ro from "../messages/ro.json";

type Messages = typeof ro;

declare module "next-intl" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}

