class Comment < ActiveRecord::Base
  belongs_to :plan
  validates :text, presence: true, length: {minimum: 2}
end
