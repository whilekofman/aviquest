import jwtFetch from "./jwt";

const RECEIVE_QUEST = 'quest/RECEIVE_QUEST';
const REMOVE_QUEST = 'quest/REMOVE_QUEST';

const selectQuest = quest => ({
    type: RECEIVE_QUEST,
    quest
})

const deselectQuest = questId => ({
    type: REMOVE_QUEST,
    questId
})

export const getQuests = () => ({quests}) => quests ? Object.values(quests) : null;

export const setQuest = (quest, userData) => async dispatch => {
    const res = await jwtFetch(`api/users/${userData._id}`, {
        method: "PATCH",
        body: JSON.stringify(userData)
    });
    const data = await res.json();
    dispatch(selectQuest(quest));
}

export const removeQuest = (questId) => dispatch => {
    dispatch(deselectQuest(questId));
}

const questReducer = (state = [], action) => {

    switch (action.type) {
        case RECEIVE_QUEST:
            return action.quest;
        // case REMOVE_QUEST:
        //     delete nextState[action.questId];
        //     return nextState;
        default:
            return state;
    }
}

export default questReducer;
