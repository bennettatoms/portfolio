class StaticPagesController < ApplicationController
  def home
    @active = 'home'
  end

  def projects
    @active = 'projects'
  end

  def odds_and_ends
    @active = 'odds_and_ends'
  end

  def cv
    @active = 'cv'
  end

  def about
    @active = 'about'
  end
end