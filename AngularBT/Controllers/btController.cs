using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularBT.Controllers
{
    public class btController : ApiController
    {

        //create instance of db
        BTDatabaseEntities db = new BTDatabaseEntities();

        
        //get all in the DB
        [HttpGet]
        public IEnumerable<Tree> Get()
        {
            return db.Trees.AsEnumerable();
        }

        //get tree by id
        public Tree Get(int id)
        {
            Tree tree = db.Trees.Find(id);
            if (tree == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }
            return tree;
        }


        //insert tree to db
        public HttpResponseMessage Post(Tree tree)
        {
            if (ModelState.IsValid)
            {
                db.Trees.Add(tree);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, tree);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new {id = tree.Id}));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

        }














    }
}
