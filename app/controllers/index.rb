get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  puts params.inspect
  # {'random' => nil}
  # If the user passes-in a "value", let's use it. Otherwise, we'll generate a random one.
  # See: roll_if_value_is_nil method in the Roll model.
  value = params[:value] ? params[:value].to_i : nil
  puts value
  
  @roll = value ? Roll.create({ value: value }) : Roll.create

  if request.xhr?
    puts '**********'

    erb :_die_roll, :layout => false
  else
    erb :index  # HINT: what does this do? what should we do instead?
  end
end
