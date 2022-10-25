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

export const getQuest = () => ({quests}) => quests ? quests : null;

export const setQuest = (quest) => dispatch => {
    dispatch(selectQuest(quest));
}

export const removeQuest = (questId) => dispatch => {
    dispatch(deselectQuest(questId));
}

const questReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_QUEST:
            nextState[action.quest.id] = action.quest;
        case REMOVE_QUEST:
            delete nextState[action.questId];
            return nextState;
        default:
            return state;
    }
}

export default questReducer;
