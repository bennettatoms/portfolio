module ApplicationHelper
  def full_title(title)
    title.blank? ? 'Bennett Adams' : "#{title} | Bennett Adams"
  end
end