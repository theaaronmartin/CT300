require './lib/crm/account.rb'
require './lib/crm/agent.rb'
require './lib/crm/contact.rb'
require './lib/crm/company.rb'

module Crm
  @agents = []
  @contacts = []
  @accounts = []

  def self.agents
    @agents
  end

  def self.contacts
    @contacts
  end

  def self.accounts
    @accounts
  end
end
