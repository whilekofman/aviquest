# Aviquest

## Background
<a href='https://aviquest.herokuapp.com' alt=''>Aviquest</a> is a gamified task managing system that allows users to create their own tasks for their life and be motivated to actually complete each task. Every user will start off with an Avitar character that they can customize and embark on quests. With each task that the user completes, they can progress on an ongoing quest to earn rewards that users can use to purchase weapons and equipment. This allows users to view life errands as a game rather than a chore, which will motivate users to be super productive.

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

## Code Snippets

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

## Future Directions
- Implement a shop system
- Implement gachapon reward system
- Implement regenerating daily action points
