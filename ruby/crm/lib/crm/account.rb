module Crm
  class Account
    attr_accessor :name, :agent, :agents
  end

  def initialize
    Crm.accounts.push(self)
  end
end
