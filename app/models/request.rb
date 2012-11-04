# == Schema Information
#
# Table name: requests
#
	
class Request < ActiveRecord::Base
  attr_accessible :open, :uid, :responseIds, :fromLoc, :toLoc, :meetingTime
  serialize :responseIds
end
