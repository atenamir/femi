//  === define types of useStore ===
export interface IStore {
  access_token: string | null;
  refresh_token: string | null;
  setState: (data: {access_token?: string | null ,  refresh_token?: string | null}) => void;
  removeState: () => void;
}
