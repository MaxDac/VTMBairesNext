export const translateAttributeSection = (attributeSection: string): string => {
    switch (attributeSection) {
        case "Physical": return "Fisici";
        case "Mental": return "Mentali";
        default: return "Sociali";
    }
}
