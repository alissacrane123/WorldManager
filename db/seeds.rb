# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ProjectMembership.destroy_all
Task.destroy_all
Project.destroy_all
User.destroy_all

user1 = User.create!(email: 'alissa@gmail.com', password: 'password', fname: 'Alissa', lname: 'Crane', city: 'san francisco')
user2 = User.create!(email: 'brandon@gmail.com', password: 'password', fname: 'Brandon', lname: 'Crane', city: 'berkeley')

project1 = Project.create!(title: "full stack", owner_id: user1.id, category: 'work')


pm1 = ProjectMembership.create!(project_id: project1.id, user_id: user1.id, role: 'admin')
pm1 = ProjectMembership.create!(project_id: project1.id, user_id: user2.id, role: 'member')

tast1 = Task.create!(title: "user table", description: "finish the user table", project_id: project1.id, user_id: user1.id, status: 'Not Started', priority: 'high')
tast2 = Task.create!(title: "project table", description: "finish the project table", project_id: project1.id, user_id: user1.id, status: "In Progress", priority: 'medium')
tast3 = Task.create!(title: "task table", description: "finish the task table", project_id: project1.id, user_id: user1.id, status: 'Finished', priority: 'high')
tast3 = Task.create!(title: "design splash", description: "finish the design for splash page", project_id: project1.id, user_id: user2.id, status: 'Not Started', priority: 'low')
tast3 = Task.create!(title: "design project", description: "finish the design for project page", project_id: project1.id, user_id: user2.id, status: 'In Progress', priority: 'low')