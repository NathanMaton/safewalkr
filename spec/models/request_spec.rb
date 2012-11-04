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

require 'spec_helper'

describe Request do
  pending "add some examples to (or delete) #{__FILE__}"
end
