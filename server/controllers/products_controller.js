const create  = (req, res) => { 
    const db = req.app.get('db');
    const { name, description, price, imageurl } = req.body;

    db.create_product( [name, description, price, imageurl] )
        .then(()  => res.status(200).send())
        .catch(() => res.status(500).send());
};

const getOne  = (req, res) => {
    const db = req.app.get('db');
    const { params } = req;

    db.read_product( [params.id] )
        .then(response => res.status(200).send(response))
        .catch(()      => res.status(500).send());
};

const getAll  = (req, res) => {
    const db = req.app.get('db');

    db.read_products()
        .then(response => res.status(200).send(response))
        .catch(()      => res.status(500).send())
};

const update  = (req, res) => {
    const db = req.app.get('db');
    const { params, query } = req;

    db.update_product( [params.id, query.desc] )
        .then(()  => res.status(200).send())
        .catch(() => res.status(500).send());
}

const destroy = (req, res) => {
    const db = req.app.get('db');
    const { params } = req;

    db.delete_product( [params.id] )
        .then(()  => res.status(200).send())
        .catch(() => res.status(500).send());
};

module.exports = {
    create,
    getOne,
    getAll,
    update,
    destroy
};