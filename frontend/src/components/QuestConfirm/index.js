

const QuestConfrim = ({setShowModal}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("In quest confirm");
        setShowModal(false);
    }

    return ( 
        <div className="quest-confirm-modal">
            <form className="quest-confirm-form" onSubmit={handleSubmit}>
                <span>You are about to embark on a new quest. All progress of your current quest will be lost.</span>
                <span>Do you wish to continue?</span>
                <button type="submit"className="quest-confirm-submit">Proceed</button>
            </form>
        </div>
     );
}
 
export default QuestConfrim;