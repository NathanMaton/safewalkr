# == Schema Information
#
# Table name: users
#
#  id          :integer          not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  homeAddress :text
#  uid         :integer
#

class User < ActiveRecord::Base
  # attr_accessible :title, :body
  

end
