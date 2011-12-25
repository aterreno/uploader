require 'bundler'
Bundler.require
require './superupload'

use Rack::RawUpload
run Sinatra::Application
