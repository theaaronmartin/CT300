module Crm
  class Contact
    attr_accessor :first_name, :last_name, :email, :job_title, :place_of_work
  end

  def initialize
    Crm.contacts.push(self)
  end
end
