# Aviquest

## Background
<a href='https://aviquest.herokuapp.com' alt=''>Aviquest</a> is a gamified task manager application that allows users to create their own real life tasks and complete them to receive rewards. Every user will start off with an Avitar character that they can be customized and embark on quests. With each task that the user completes, they can progress and complete quest to earn rewards that can be used to purchase weapons and equipment. The application aims to incentivize users for completing tedious chores and mundane tasks to help them complete tasks and build good habits.

## Technologies

- MongoDB - NoSQL database management program that uses JSON-like documents with optional schemas.
- Express - Backend web application for building RESTful APIs with Node.js.
- React - Open source frontend library.
- Node.js - Open source backend JavaScript runtime environment.
- Amazon Simple Storage Service (Amazon S3) is an object storage service cloud service.

## Add/Delete a Task
<img src="https://github.com/whilekofman/aviquest/blob/main/frontend/src/assets/images/add_delete_task.gif" alt="" />
User can add a task they would like to complete and specify difficulty in the edit section.  User may also delete any tasks. 

## Equip/Unequip an Item
<img src="https://github.com/whilekofman/aviquest/blob/main/frontend/src/assets/images/equiping.gif" alt="" />
User can equip an item to strengthen their character and unequip an item.  If the equipment slots are full, the first item will be returned to the inventory. Clicking an equipped item will return it to the inventory.

## Gacha Reward System
![gacha-cut](https://user-images.githubusercontent.com/103459101/213251621-6b037283-0584-491c-9ac2-cdbbeff833d0.gif)

User can use gold from quest completion to spend in the Gachapon Reward system. An item is randomly selected and distributed to the user's inventory.

## Code Snippets

### Inventory
```javascript
    const equipItem = () => {
        let index;
        if (equipment.length < 4) {
            index = items.indexOf(item);
            items.splice(index, 1);
            equipment.push(item);
        } else {
            items.push(equipment[0]);
            equipment.shift();
            index = items.indexOf(item);
            items.splice(index,1);
            equipment.push(item);
        }
        dispatch(updateUser({
            equipment,
            items,
            _id
        }));
    }
```

### Gacha Reward System
```javascript
    useEffect(() => {
        if (moving) {
            setItemData(itemList[index]);
            const count = setInterval(() => {
                setIndex(Math.floor(Math.random() * itemList.length))
            },60);
            return () => {
                clearInterval(count);
            };
        } else if (!moving && reward && itemList[index] && items.length < 24){
            newItems.push(itemList[index])
            dispatch(updateUser({
                _id,
                coins: coins -50,
                items:newItems,
            }))
        } else {
            return;
        }
    },[index,moving]);
```

## Future Directions
- Implement a shop system
~~Implement gachapon reward system~~
- Implement regenerating daily action points
