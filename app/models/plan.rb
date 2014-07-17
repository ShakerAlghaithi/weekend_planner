class Plan < ActiveRecord::Base
  has_many  :comments
  belongs_to :user
  validates :contant, presence: true, length: {minimum: 2}
end
