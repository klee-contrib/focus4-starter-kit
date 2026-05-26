/// <reference types='codeceptjs' />
type utilisateurs = import("./tests/pages/utilisateurs").default;
type Focus = InstanceType<typeof import("./tests/focus-helper").default>;

declare namespace CodeceptJS {
    interface SupportObject {
        I: I;
        current: any;
        utilisateurs: utilisateurs;
    }
    interface Methods extends Playwright, Focus {}
    interface I extends WithTranslation<Methods> {}
    namespace Translation {
        interface Actions {}
    }
}

