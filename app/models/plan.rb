class Plan < ActiveRecord::Base
  has_many  :comments
  validates :contant, presence: true, length: {minimum: 2}
end
