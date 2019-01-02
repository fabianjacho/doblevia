/**
 * UsuariosdvController
 *
 * @description :: Server-side logic for managing usuariosdvs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    get: function (req, res) {
        Usuariosdv.query('SELECT CGE_NOMINA_CLIENTES.NOMBRES,' +  
        'CGE_NOMINA_CLIENTES.APELLIDOS, ' + 
        'CGE_NOMINA_CLIENTES.FONO_CELULAR, ' +
        'CGE_NOMINA_CLIENTES.FONO_CASA, '+
        'CGE_NOMINA_CLIENTES.EMAIL, '+
        'CGE_NOMINA_CLIENTES.BARRIO, '+
        'CGE_NOMINA_CLIENTES.CALLE_PRINCIPAL, '+
        'CGE_NOMINA_CLIENTES.NUM_CASA, '+
        'CGE_NOMINA_CLIENTES.CALLE_SECUNDARIA, '+
        'CGE_NOMINA_CLIENTES.REFERENCIA, '+
        'CGE_CLIENTE.NOMBRE_RS_CLIE EMPRESA, ' + 
        'CGE_CLIENTE.CODIGO_CLIE, ' +
        'CGE_NOMINA_CLIENTES.CODIGO_NOMINA ' +
        'FROM CGE_NOMINA_CLIENTES,  '+
        'CGE_CLIENTE  ' +
        'where (CGE_NOMINA_CLIENTES.CODIGO_CLIE = CGE_CLIENTE.CODIGO_CLIE) and ' +
            ' (CGE_NOMINA_CLIENTES.usuario_app = ' + req.param("id") +') and ' +
            ' (CGE_NOMINA_CLIENTES.passwd_app = ' + req.param("id1") + ')', function(err, results) {
          if (err) {
            res.json(err) //res.send(400) 
          } 
            res.json(results)  //send(results);
        });
      },

      updateps: function(req, res) {
        Usuariosdv.query('update CGE_NOMINA_CLIENTES ' +
            'set passwd_app = ' + req.param("id") +
            'where CODIGO_NOMINA = ' + req.param("id1") +
            'and passwd_app = ' + req.param("id2"), function(err, results) {
          if (err) {
            res.json(err) //send(400);
          } 
            res.json(results)  //send(results);
        });
      }, 

      updatedt: function(req, res) {
        Usuariosdv.query('update CGE_NOMINA_CLIENTES ' +
            ' set FONO_CELULAR = ' + req.param("id") + ',' +
                ' FONO_CASA = '+ req.param("id1") + ',' +
                ' EMAIL = ' + req.param("id2") +
            ' where usuario_app = ' + req.param("id3"),function(err, results) {
          if (err) {
            res.json(err) //send(400);
          } 
            res.json(results)  //send(results);
        });
      }, 
     
      policy: function(req, res) {
        res.send("policy");
      }
};

