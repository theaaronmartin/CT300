require 'pp'
require './lib/crm'

company = Crm::Company.new
company.name = "Code Tahoe"

agent = Crm::Agent.new
agent.first_name = "Blaze"
agent.last_name = "Halderman"

account = Crm::Account.new
account.name = "SNC"
account.agent = agent

if agent.accounts == nil
  agent.accounts = []
end

second_account = Crm::Account.new
second_account.name = "Koi Sushi"
second_account.agent = agent

if account.agents == nil
  account.agents = []
end

agent.accounts.push(account)
agent.accounts.push(second_account)
account.agents.push(agent)

contact = Crm::Contact.new
contact.first_name = "Janis"
contact.last_name = "Joplin"
contact.email = "janis.joplin@gmail.com"
contact.job_title = "Music Teacher"
contact.place_of_work = account

if agent.contacts == nil
  agent.contacts = []
end

agent.contacts.push(contact)

second_contact = Crm::Contact.new
second_contact.first_name = "Bill"
second_contact.last_name = "Nye"
second_contact.email = "bill.nye@gmail.com"
second_contact.job_title = "Science Guy"
second_contact.place_of_work = account

if agent.contacts == nil
  agent.contacts = []
end

agent.contacts.push(second_contact)

third_contact = Crm::Contact.new
third_contact.first_name = "Bob"
third_contact.last_name = "Ross"
third_contact.email = "bob.ross@gmail.com"
third_contact.job_title = "Art Teacher"
third_contact.place_of_work = account

if agent.contacts == nil
  agent.contacts = []
end

agent.contacts.push(third_contact)

fourth_contact = Crm::Contact.new
fourth_contact.first_name = "Carlos"
fourth_contact.last_name = "The Chef"
fourth_contact.email = "carlos.sushi@gmail.com"
fourth_contact.job_title = "Sushi Chef"
fourth_contact.place_of_work = second_account

if agent.contacts == nil
  agent.contacts = []
end

agent.contacts.push(fourth_contact)

fifth_contact = Crm::Contact.new
fifth_contact.first_name = "Minh"
fifth_contact.last_name = "Chang"
fifth_contact.email = "minh.chang@gmail.com"
fifth_contact.job_title = "Hostess"
fifth_contact.place_of_work = second_account

if agent.contacts == nil
  agent.contacts = []
end

agent.contacts.push(fifth_contact)

pp company
pp account.agents.map { |a| a.first_name + ' ' + a.last_name }
pp agent.accounts.map { |a| a.name }
pp agent.contacts.map { |a| a.first_name + ' ' + a.last_name }
