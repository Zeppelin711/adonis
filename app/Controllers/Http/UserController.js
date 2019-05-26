'use strict'

const User = use('App/Model/User')

class UserController {

    async index({request, responce, view}) {
        const users = await User.all()
        return view.render('user.index', {users: user.toJSON()})
    }

    async show({request, response, view, params}){

    }
    async store({request, response,}){
        const user = mew User()
        const  formData = request.all()
        user.marge(formData)

        await user.save()

        return response.json(user)

    }

    async save({request, response, view, params}){

    }

    async destroy({request, response, view, params}){

    }

    async create({request, response, view, params}){

    }

    async edit({request, response, view, params}){

    }
}


module.exports = UserController
