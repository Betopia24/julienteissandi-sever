import { Secret } from "jsonwebtoken";
declare const _default: {
    env: string | undefined;
    port: string | undefined;
    bcrypt_salt_rounds: string | undefined;
    brevo_user: string | undefined;
    brevo_sender_email: string | undefined;
    brevo_api_key: string | undefined;
    base_url_server: string | undefined;
    base_url_client: string | undefined;
    jwt: {
        access_secret: Secret;
        access_expires_in: string;
        refresh_secret: Secret;
        refresh_expires_in: string;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map