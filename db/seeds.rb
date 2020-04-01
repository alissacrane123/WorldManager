# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

Alert.destroy_all
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
pm1 = project1.create_pm

project2 = Project.create!(title: "santa barbara trip", owner_id: user2.id, category: 'travel')
pm2 = project2.create_pm

project3 = Project.create!(title: "project manager", owner_id: user1.id, category: 'work')
pm3 = project3.create_pm

ProjectMembership.create!(project_id: project3.id, user_id: user2.id, inviter_id: user1.id)
ProjectMembership.create!(project_id: project2.id, user_id: user1.id, inviter_id: user2.id)
ProjectMembership.create!(project_id: project1.id, user_id: user2.id, inviter_id: user1.id)

Alert.create_alerts


# pm1 = ProjectMembership.create!(project_id: project1.id, user_id: user1.id, role: 'admin', request_status: true)
# pm1 = ProjectMembership.create!(project_id: project1.id, user_id: user2.id, role: 'member', inviter_id: user1.id, request_status: false)
# pm1 = ProjectMembership.create!(project_id: project2.id, user_id: user1.id, role: 'admin', request_status: true)
# pm1 = ProjectMembership.create!(project_id: project2.id, user_id: user2.id, role: 'member', request_status: true)
# pm1 = ProjectMembership.create!(project_id: project3.id, user_id: user1.id, role: 'admin', request_status: true)

tast1 = Task.create!(title: "user table", description: "finish the user table", project_id: project1.id, user_id: user1.id, status:'todo', priority: 'high', due_date: format_date('04/28/2019'))
tast2 = Task.create!(title: "project table", description: "finish the project table", project_id: project1.id, user_id: user1.id, status: 'doing', priority: 'medium', due_date: format_date('04/29/2019'))
tast3 = Task.create!(title: "task table", description: "finish the task table", project_id: project1.id, user_id: user1.id, status: 'done', priority: 'high', due_date: format_date('04/30/2019'))
tast4 = Task.create!(title: "design splash", description: "finish the design for splash page", project_id: project1.id, user_id: user2.id, status:'todo', priority: 'low', due_date: format_date('05/01/2019'))
tast5 = Task.create!(title: "design project", description: "finish the design for project page", project_id: project1.id, user_id: user2.id, status: 'doing', priority: 'low', due_date: format_date('05/10/2019'))


tast6 = Task.create!(title: "Flights to SB", description: "roundtrip tickets from sfo", project_id: project2.id, user_id: user1.id, status:'todo', priority: 'high', due_date: format_date('04/28/2019'))
tast7 = Task.create!(title: "Hotel in SB", description: "book hotels in SB", project_id: project2.id, user_id: user2.id, status: 'doing', priority: 'medium', due_date: format_date('04/29/2019'))
tast6 = Task.create!(title: "Testing", description: "roundtrip tickets from sfo", project_id: project1.id, user_id: user1.id, status:'todo', priority: 'high', due_date: format_date('05/08/2020'))
tast7 = Task.create!(title: "Database", description: "book hotels in SB", project_id: project1.id, user_id: user1.id, status: 'doing', priority: 'medium', due_date: format_date('05/19/2020'))

Task.create!(title: "Add Loader", user_id: user1.id, project_id: project3.id, status: 'todo', due_date:format_date("05/05/2020") )
Task.create!(title: "refactor notifications", user_id: user1.id, project_id: project3.id, due_date:format_date("05/05/2020"), status: 'todo', )
Task.create!(title: "test everything", user_id: user1.id, project_id: project3.id, due_date:format_date("05/05/2020"), status: 'todo' )
Task.create!(title: "email", user_id: user1.id, project_id: project3.id, due_date:format_date("05/01/2020"), status: 'todo' )

Task.create!(title: "notifications", status: 'doing',user_id: user1.id, project_id: project3.id, due_date:format_date("05/01/2020") )
Task.create!(title: "teams page", user_id: user1.id, status: 'doing', project_id: project3.id, due_date:format_date("05/01/2020") )
Task.create!(title: "accept team invite", user_id: user1.id, project_id: project3.id, due_date:format_date("05/01/2020") )
Task.create!(title: "task filters", user_id: user1.id, status: 'doing', project_id: project3.id, due_date:format_date("04/15/2020") )
Task.create!(title: "add complete button to cal task", user_id: user1.id, project_id: project3.id, due_date:format_date("04/15/2020") )
Task.create!(title: "chat and team feed", user_id: user1.id, status: 'doing', project_id: project3.id, due_date:format_date("04/15/2020") )
Task.create!(title: "comments and updates for tasks", user_id: user1.id, project_id: project3.id, due_date:format_date("04/15/2020"), status: 'todo' )

Task.create_alerts