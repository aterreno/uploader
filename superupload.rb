require 'json'

get '/' do
  haml :index
end

post '/' do
  JSON.generate(params[:file])
end