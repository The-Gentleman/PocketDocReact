class Api::V1::UsersController < ApplicationController
    def index
        @users = User.all 
        # render json: @users
        user_json = UserSerializer.new(@users).serialized_json
        render json: user_json
    end 
end
