

export const VersionHeader = ({ mode }) => (
    <header className="version-header">
        <h1>{mode === "view" ? "Dataset Versions" : "Generate New Version"}</h1>
    </header>
);
