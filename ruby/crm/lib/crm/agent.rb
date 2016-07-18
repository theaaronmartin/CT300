module Crm
  class Agent
    attr_accessor :first_name, :last_name, :contacts, :accounts
  end

  def initialize
    Crm.agents.push(self)
  end
end
