module.exports = {
    ".nui-btn": {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.75rem",
        padding: "0.5rem 1rem",
        fontWeight: "500",
        transition: "all 0.2s ease",
        cursor: "pointer",
        gap: "0.5rem",
    },

    ".nui-btn-primary": {
        backgroundColor: "var(--nui-primary)",
        color: "#ffffff",
    },

    ".nui-btn-primary:hover": {
        filter: "brightness(0.95)",
    },

    ".nui-btn-outline": {
        border: "1px solid var(--nui-primary)",
        color: "var(--nui-primary)",
        backgroundColor: "transparent",
    },

    ".nui-btn-outline:hover": {
        backgroundColor: "rgba(37, 99, 235, 0.08)",
    },

    ".nui-btn-success": {
        backgroundColor: "#16a34a",
        color: "#fff",
    },

    ".nui-btn-danger": {
        backgroundColor: "#dc2626",
        color: "#fff",
    },

    ".nui-btn-sm": {
        padding: "0.35rem 0.75rem",
        fontSize: "0.875rem",
    },

    ".nui-btn-lg": {
        padding: "0.75rem 1.25rem",
        fontSize: "1rem",
    }
}