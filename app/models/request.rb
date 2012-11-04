# == Schema Information
#
# Table name: requests
#
#  id          :integer          not null, primary key
#  uid         :integer
#  open        :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  responseIds :text
#  fromLoc     :string(255)
#  toLoc       :string(255)
#  meetingTime :datetime
#

class Request < ActiveRecord::Base
  attr_accessible :open, :uid, :responseIds
  serialize :responseIds
end
