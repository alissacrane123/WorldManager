# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

ProjectMembership.destroy_all
Task.destroy_all
Project.destroy_all
User.destroy_all

def format_date(str)
  Date.strptime(str, "%m/%d/%Y")
end

user1 = User.create!(email: 'alissa@gmail.com', password: 'password', fname: 'Alissa', lname: 'Crane', city: 'san francisco')
user2 = User.create!(email: 'brandon@gmail.com', password: 'password', fname: 'Brandon', lname: 'Crane', city: 'berkeley')

project1 = Project.create!(title: "full stack", owner_id: user1.id, category: 'work')
project2 = Project.create!(title: "santa barbara trip", owner_id: user1.id, category: 'travel')


pm1 = ProjectMembership.create!(project_id: project1.id, user_id: user1.id, role: 'admin')
pm1 = ProjectMembership.create!(project_id: project1.id, user_id: user2.id, role: 'member')
pm1 = ProjectMembership.create!(project_id: project2.id, user_id: user1.id, role: 'admin')
pm1 = ProjectMembership.create!(project_id: project2.id, user_id: user2.id, role: 'member')

tast1 = Task.create!(title: "user table", description: "finish the user table", project_id: project1.id, user_id: user1.id, status: 'Not Started', priority: 'high', due_date: format_date('11/28/2019'))
tast2 = Task.create!(title: "project table", description: "finish the project table", project_id: project1.id, user_id: user1.id, status: "In Progress", priority: 'medium', due_date: format_date('11/29/2019'))
tast3 = Task.create!(title: "task table", description: "finish the task table", project_id: project1.id, user_id: user1.id, status: 'Finished', priority: 'high', due_date: format_date('11/30/2019'))
tast4 = Task.create!(title: "design splash", description: "finish the design for splash page", project_id: project1.id, user_id: user2.id, status: 'Not Started', priority: 'low', due_date: format_date('12/01/2019'))
tast5 = Task.create!(title: "design project", description: "finish the design for project page", project_id: project1.id, user_id: user2.id, status: 'In Progress', priority: 'low', due_date: format_date('12/10/2019'))


tast6 = Task.create!(title: "Flights to SB", description: "roundtrip tickets from sfo", project_id: project2.id, user_id: user1.id, status: 'Not Started', priority: 'high', due_date: format_date('11/28/2019'))
tast7 = Task.create!(title: "Hotel in SB", description: "book hotels in SB", project_id: project2.id, user_id: user2.id, status: "In Progress", priority: 'medium', due_date: format_date('11/29/2019'))
tast6 = Task.create!(title: "Testing", description: "roundtrip tickets from sfo", project_id: project1.id, user_id: user1.id, status: 'Not Started', priority: 'high', due_date: format_date('01/08/2020'))
tast7 = Task.create!(title: "Database", description: "book hotels in SB", project_id: project1.id, user_id: user1.id, status: "In Progress", priority: 'medium', due_date: format_date('01/19/2020'))