-- -- Create Test data for the chores
-- INSERT INTO chores (chore_id, name, description, priority, last_completed, frequency, frequency_type) VALUES (1, 'Dishes', 'Wash the dishes', 5, CURDATE(), 1, 'WEEK');
-- INSERT INTO chores (chore_id, name, description, priority, last_completed, frequency, frequency_type) VALUES (2, 'Laundry', 'Do the laundry', 3, CURDATE(), 1, 'WEEK');
-- INSERT INTO chores (chore_id, name, description, priority, last_completed, frequency, frequency_type) VALUES (3, 'Bathroom', 'Clean the bathroom', 1, CURDATE(), 1, 'WEEK');
-- INSERT INTO chores (chore_id, name, description, priority, last_completed, frequency, frequency_type) VALUES (4, 'Vacuum', 'Vacuum the house', 2, CURDATE(), 1, 'WEEK');


-- -- Create test data for the tasks table and link them to the chores
-- INSERT INTO tasks (task_id, chore_id, name, description, priority) VALUES (1, 1, 'Wash the dishes', 'Wash the dishes', 5);
-- INSERT INTO tasks (task_id, chore_id, name, description, priority) VALUES (2, 1, 'Dry the dishes', 'Dry the dishes', 5);
-- INSERT INTO tasks (task_id, chore_id, name, description, priority) VALUES (3, 2, 'Wash the clothes', 'Wash the clothes', 3);
-- INSERT INTO tasks (task_id, chore_id, name, description, priority) VALUES (4, 2, 'Dry the clothes', 'Dry the clothes', 3);
-- INSERT INTO tasks (task_id, chore_id, name, description, priority) VALUES (5, 3, 'Clean the bathroom', 'Clean the bathroom', 1);
-- INSERT INTO tasks (task_id, chore_id, name, description, priority) VALUES (6, 3, 'Clean the toilet', 'Clean the toilet', 1);
-- INSERT INTO tasks (task_id, chore_id, name, description, priority) VALUES (7, 4, 'Vacuum the living room', 'Vacuum the living room', 2);
-- INSERT INTO tasks (task_id, chore_id, name, description, priority) VALUES (8, 4, 'Vacuum the kitchen', 'Vacuum the kitchen', 2);

