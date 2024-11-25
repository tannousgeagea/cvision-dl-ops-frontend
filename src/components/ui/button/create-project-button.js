import './create-project-button.css'

const NewProjectButton = ({ onClick }) => {
    return (
        <button className="new-project-button" onClick={onClick}>
            + New Project
        </button>
    );
};

export default NewProjectButton;