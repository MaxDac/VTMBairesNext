import type {Option} from "vtm-baires-next-utils";

export const LoginRoutes = {
    login: "/Access",
    register: "/Access/CreateUser",
    recoverPassword: "/Access/RecoverPassword",
    disclaimer: "/Access/Disclaimer",
}

export const Routes = {
    main: "/",
    creation1: "/Creation/1",
    creation2: "/Creation/2",
    creation3: "/Creation/3",
    creation4: "/Creation/4",
    creation5: "/Creation/5",
    settings: "/Settings",
    messages: "/Messages",
    sentMessages: "/Messages/Sent",
    readMessage: (id: string): string => `/Messages/${id}`,
    newMessage: (id?: string): string => id ? `/Messages/New/${id}` : "/Messages/New",
    newMessageTo: (userId: string): string => `/Messages/New/User/${userId}`,
    newMessageToCharacter: (characterId: string): string => `/Messages/New/Character/${characterId}`,
    forumSections: "/Forum",
    forumSection: (sectionId: string): string => `/Forum/${sectionId}`,
    forumThread: (threadId: string): string => `/Forum/Thread/${threadId}`,
    modifyForumThread: (sectionId: string, threadId: string): string => `/Forum/${sectionId}/Thread/${threadId}/Modify`,
    createNewForumThread: (sectionId: string): string => `/Forum/${sectionId}/Thread/New`,
    createNewForumPost: (threadId: string): string => `/Forum/Thread/${threadId}/post/New`,
    modifyForumPost: (threadId: string, postId: string): string => `/Forum/Thread/${threadId}/Post/${postId}/Modify`,
    mainMap: "/Map",
    hunt: "/Hunt",
    havenEvents: "/Havens/Events",

    charactersList: "/Characters",
    sheet: (id?: Option<string>, reload?: Option<boolean>): string =>
        id != null
            ? (reload === true ? `/Sheet/${id}/Reload` : `/Sheet/${id}`)
            : "/Characters",
    modifySheet: (id: string): string => `/Sheet/Modify/${id}`,
    subMap: (id: string): string => `/map/${id}`,
    chat: (id: string): string => `/chat/${id}`,
    bookChat: "/book-chat",

    admin: "/Admin",
    unapprovedCharacters: "/Admin/Characters/Unapproved",
    characterDashboard: (id: string): string => `/Admin/Characters/${id}`,
    createNewNpc: "/Admin/Npc/New",
    defineNpc: (id: string): string => `/Admin/Npc/${id}/define`,
    adminHavens: "/Admin/Havens",
    chatViewer: "/Admin/Chat",
    adminHavenEvents: "/Admin/Havens/Events",
    logout: "/Logout",
    sessionExpired: "/Logout/SessionExpired"
}

export const GuideRoutes = {
    home: "/Guides",
    generalRules: "/Guides/GeneralRules",
    roles: "/Guides/Roles",
    introduction: "/Guides/Introduction",
    glossary: "/Guides/Glossary",
    environment: "/Guides/Environment",
    environmentBaires: "/Guides/EnvironmentBaires",
    camarilla: "/Guides/Camarilla",
    environmentSects: "/Guides/EnvironmentSects",
    npcs: "/Guides/Npcs",
    currentSituation: "/Guides/CurrentSituation",
    clans: "/Guides/Clans",
    attributes: "/Guides/Attributes",
    mechanics: "/Guides/GeneralRules",
    creation: "/Guides/Creation",
    homeRules: "/Guides/HomeRules",
    hunt: "/Guides/Index",
    experience: "/Guides/Experience",
    places: "/Guides/Places",
    sayings: "/Guides/Sayings",
    siteHelp: "/Guides/SiteHelp",
    faqs: "/Guides/Faq",
    credits: "/Guides/Credits"
}
